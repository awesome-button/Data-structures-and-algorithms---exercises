function Printer(ppm) {
    this.rate = ppm;
    this.currentTask = null;
    this.remainingTime = 0;

    this.tick = () => {
        if (this.currentTask) {
            this.remainingTime = this.remainingTime - 1;
            if (this.remainingTime === 0) this.currentTask = null;
        }
    }

    this.busy = () => {
        return this.currentTask != null;
    }

    this.startNext = (newTask) => {
        this.currentTask = newTask;
        this.remainingTime = newTask.pages/this.rate*60;
    } 
}

function Task(currSec) {
    this.pages = Math.floor(Math.random()*20)+1;
    this.timestamp = currSec;
    this.waitTime = (currentTime) => {
        return currentTime - this.timestamp;
    }
}

function Queue() {
    this.queue = [];
    this.add = (task) => {
        this.queue.unshift(task);
    }
    this.remove = () => {
        this.queue.pop();
    }
}

function simulation(period, capacity) {
    let p = new Printer(capacity);
    let q = new Queue();
    let waitingTimes = [];
    
    for (let i = 0; i < period; i++) {
        let currSec = i;
        if (newPrintTask()) {
            let t = new Task(currSec);
            q.add(t);
        }
        
        //when the printer is not executing any task while the queue still has some unexecuted tasks
        //we tell the printer to start a new task from the front of the queue
        if (!p.busy() && q.queue.length !== 0) {
            //We want to know how long the task that is about to be executed was in the queue
            let waitingTime = q.queue[q.queue.length - 1].waitTime(currSec);
            waitingTimes.push(waitingTime);
            p.startNext(q.queue[q.queue.length-1]);
            q.remove();            
        }
        p.tick();
    }
    let average = waitingTimes.reduce((a, b) => a + b)/waitingTimes.length;
    console.log(`Average wait ${average}. ${q.queue.length} tasks remaining`);
};

// This defines how many tasks the printer will receive per hour.
// Let's say that there 10 employees using the same printer.
// Every employee sends about 4 tasks to print every hour.
// it means that the printer will receive a new task on the average
//every 90 seconds: 3600 seconds / (10 employees * 4 tasks)
function newPrintTask() {
    let rand = Math.floor(Math.random()*90)+1;
    return rand === 90;
}

simulation(3600, 5);
simulation(3600, 10);
simulation(3600, 20);