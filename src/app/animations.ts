import { trigger, state, style, transition, animation, animate, keyframes, useAnimation } from '@angular/animations';

// there are 2 state changes
//  void => *  | alias :enter//before component renders
// * => void   | alias :leave// when component destroys
// void <=> * // two way transition
//  step by step animation | animateChild() | 

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(50px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
)
export let fadeInAnimation = animation([
        style({opacity:0, backgroundColor : '{{color}}',transform : 'translateX({{translateX}})'}),
        animate('{{duration}} {{easing}}')  
  ],{
      params : {
          duration : '2s',
          easing : 'ease-out',
          color : 'white',
          translateX : '0px'
      }
  }
  )
export let fadeOutAnimation = animation([
    animate('{{duration}} {{easing}}',style({opacity:0,backgroundColor:'{{color}}'}))
],{
    params : {
        duration : '0.5s',
        easing : 'ease-in',
        color:'red'
    }
});

export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),
    transition('void => *',
    
    useAnimation(fadeInAnimation)
    // [
    //     style({ backgroundColor: "white" }), // (-) optional //immediately applied
    //     animate(1000) //apply over period of time(1s)|//this will undo all changes which above styles element applied after 2sec
    // ]
    ),
    transition('* => void', 
            useAnimation(fadeOutAnimation)
    )

])

export let slide = trigger(
    'slide',
    [
        transition(':enter',
            [
                style({ transform: 'translateX(-10px)' }),
                animate(1000)
            ]
        ),

        transition(':leave',
            // animate("0.5s ease-in", style({ transform: 'translateX(-100%)' }))
            // animate("0.5s cubic-bezier(.09,.98,.97,.29)", style({ transform: 'translateX(-100%)' }))
            useAnimation(bounceOutLeftAnimation)
        )

    ]

)
export let bounceIn = trigger('bounceIn',[
    transition(":enter",
    [
        style({opacity:0,color:'Green',transform:'translateY(-100%)'}),
        animate(1000)
    ]
    )
])