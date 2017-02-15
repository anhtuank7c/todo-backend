'use strict';

// task-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  content: { type: String, required: true },
  resolved: { type: Boolean, 'default': false },
  resolvedAt: { type: Date, 'default': null },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
});

const taskModel = mongoose.model('task', taskSchema);

module.exports = taskModel;