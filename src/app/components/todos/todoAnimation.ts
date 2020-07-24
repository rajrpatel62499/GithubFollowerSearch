import { bounceOutLeftAnimation, fadeInAnimation, fadeOutAnimation } from './../../animations';
import { trigger, transition, style, animate, useAnimation, state,group, query, animateChild, stagger } from '@angular/animations';
export let todoAnimation = trigger('todoAnimation',
    [
        state('*', style({ backgroundColor: 'white' })), //default state
        transition(':enter',
            useAnimation(fadeInAnimation,
                {
                    params: {
                        duration: '1s',
                        easing: 'ease-out',
                        translateX : '-20px'
                    }
                })
            // [
            // style({ opacity: 0, backgroundColor: 'blue' }),
            // animate(2000, style({ opacity: 1, backgroundColor: 'grey' }))
            // ]
        ),
        transition(':leave',
            [
                // style({ backgroundColor: 'red' }),
                // animate(500),
                useAnimation(fadeOutAnimation),
                useAnimation(bounceOutLeftAnimation)
            ])
    ]
)

export let todosAnimation = trigger('todosAnimation',
[
    transition(":enter",
    [
        group(
          [  query('h1',[
                style({transform : 'translateY(-50px)'}),
                animate(1000)
    
            ]),
            query('@todoAnimation',
            stagger(300,animateChild()), {optional:true}
            )
          ]
            )
        
    ]
    )
]
)