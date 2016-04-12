/* global QA_MODE */
'use strict';

import QaHelper from './qa-helper';

export default class App {
  constructor() {
    console.log('App constructor');

    let docFrag = document.createDocumentFragment();
    let appContainer = document.createElement('div');
    appContainer.className = 'app-state';
    docFrag.appendChild(appContainer);
    document.querySelector('body').appendChild(docFrag);

    this.state = 'Default App State';
    this.setQa(QaHelper);

  }
  
  get state() {
    return this._state;
  }
  
  set state(val) {
    this._state = val;
    console.log('state:' + val);
    document.querySelector('.app-state').innerHTML = val;
  }
  
  appMethod() {
    console.log('App method');
  }

  setQa(QaHelper) {
    if (QA_MODE) {
      this.qa = new QaHelper(this);
    }
  }

  appQaMethod() {
    if (!QA_MODE) {
      return;
    }
    console.log('App QA method');
  }
}
