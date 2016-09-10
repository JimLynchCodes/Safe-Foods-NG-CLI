/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ToDosComponent } from './to-dos.component';

describe('Component: ToDos', () => {
  it('should create an instance', () => {
    let component = new ToDosComponent();
    expect(component).toBeTruthy();
  });
});
