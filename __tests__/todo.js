const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo 1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    add({
        title: "overdue todo",
        completed: false,
        dueDate: new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString("en-CA")
    });
    add({
        title: "due later todo",
        completed: false,
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString("en-CA")
    });
    add({
      title: "Test todo 2",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add new todo", () => {
    const beforelen = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(beforelen + 1);
  });
  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should retrieve overdue items", () => {
    for (let i=0;i<overdue.length;i++){
      expect(overdue[i].dueDate<new Date().toLocaleDateString("en-CA")).toBe(true)
    }
  });
  test("should retrieve due later items", () => {
    for (let i=0;i<overdue.length;i++){
      expect(overdue[i].dueDate===new Date().toLocaleDateString("en-CA")).toBe(true)
    }  });
  test("should retrieve due today items", () => {
    for (let i=0;i<overdue.length;i++){
      expect(overdue[i].dueDate>new Date().toLocaleDateString("en-CA")).toBe(true)
    }  });
});
