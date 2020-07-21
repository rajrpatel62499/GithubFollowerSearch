import { bounceOutLeftAnimation } from './../../animations';
import { trigger, transition, style, animate, useAnimation, state } from '@angular/animations';
export let todoAnimation = trigger('todoAnimation',
    [
        state('*', style({ backgroundColor: 'yellow' })), //default state
        transition(':enter',
            [
                style({ opacity: 0, backgroundColor: 'blue' }),
                animate(2000, style({ opacity: 1, backgroundColor: 'grey' }))
            ]),

        transition(':leave',
            [
                style({ backgroundColor: 'red' }),
                useAnimation(bounceOutLeftAnimation)
            ])
    ]
)