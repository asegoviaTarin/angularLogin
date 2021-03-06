﻿import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-table',
  templateUrl: 'table.component.html'
})
export class TableComponent {
  @Input() data:Element[];
}
export interface Element {
  name: string;
  y: string;
}