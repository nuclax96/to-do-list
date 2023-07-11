function _getID() {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}

class Task {
  constructor(title, dueDate, createDate, priority, completed, projectId) {
    this._id = _getID();
    this._title = title;
    this._dueDate = dueDate;
    this._createDate = createDate;
    this._priority = priority;
    this._completed = completed;
    this._projectId = projectId;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value) {
      this._title = value;
    }
  }

  get description() {
    return this._description;
  }

  set description(value) {
    if (value) {
      this._description = value;
    }
  }

  get createDate() {
    return this._createDate;
  }

  set createDate(value) {
    if (value) {
      this._createDate = value;
    }
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    if (value) {
      this._dueDate = value;
    }
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    if (value) {
      this._priority = value;
    }
  }
}

export default Task;
