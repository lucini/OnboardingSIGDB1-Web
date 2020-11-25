import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoaderService } from '../service/loader.service';

@Component({
    selector: 'app-loader',
    template: `
        <div *ngIf="loading$ | async" class="spin">
        </div>
    `,
    styles: [`
        @keyframes spinner {
            0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
            }
            100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
            }
        }
        .spin::before {
            animation: 1.5s linear infinite spinner;
            animation-play-state: inherit;
            border: solid 5px #cfd0d1;
            border-bottom-color: #1c87c9;
            border-radius: 50%;
            content: "";
            height: 40px;
            width: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            will-change: transform;
        }
    `],
})

export class LoaderComponent implements OnInit {
    loading$: Observable<boolean>;

    constructor(private loaderService: LoaderService) { }

    ngOnInit(): void {
        this.loading$ = this.loaderService.listenLoad();
    }
}
