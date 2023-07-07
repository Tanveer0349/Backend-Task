const db=require('./db');

describe('Get Tasks',()=>{
    it('should return an array of tasks',()=>{
        const result=db.fetchTasks();
        expect(result.length).toBe(5)
    })
})