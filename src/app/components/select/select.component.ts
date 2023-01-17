import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelect } from '../../interface/select.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  // 标题
  @Input() title: string = '';
  // 选项
  @Input() options: ISelect[] = [];
  // 默认值
  @Input() default?: ISelect;
  @Output() onSelect = new EventEmitter<ISelect>();

  // 选中项
  public selected?: ISelect;
  // 选项是否展开
  public isExpand = false;

  constructor() {}

  // TODO: 优化实现
  public toggleSelector(): void {
    this.isExpand = !this.isExpand;
  }

  public onChange(option: ISelect): void {
    this.selected = option;
    this.onSelect.emit(option);
  }

  ngOnInit(): void {
    this.selected = this.options[0];
    if (this.default) {
      this.selected = this.default;
      this.onSelect.emit(this.default);
    }
  }
}
