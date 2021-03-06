import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @Output() addMessageEvent: EventEmitter<Message> = new EventEmitter<Message>();

  currentSender: string = '100';

  @ViewChild('subject', { static: false }) subject!: ElementRef;
  @ViewChild('msgText', { static: false }) msgText!: ElementRef;

  onSendMessage(e: Event) {
    e.preventDefault();
    const newMessage = new Message('1', this.subject.nativeElement.value, this.msgText.nativeElement.value, this.currentSender);
    this.messageService.addMessage(newMessage);
//     this.addMessageEvent.emit(newMessage);
    this.onClear();
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
    this.subject.nativeElement.focus();
  }

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
