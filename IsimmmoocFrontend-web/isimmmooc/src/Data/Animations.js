let easing = [0.6,-0.05,0.01,0.99];
const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6, ease:easing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easing
    }
  }
};

const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};
const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
};



const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easing
    }
  }
};
const container = {
  show:{
      transition:{
          staggerChildren:0.2
      }
  }
};

const item = {
  hidden:{opacity:0,y:20},
  show:{
      opacity:1,
      y:0,
      transition:{
          ease:'easeInOut',
          duration:.4
      }
  }
}

const title = {
  hidden:{
      y:60,
      opacity:0
  },
  show:{
      y:0,
      opacity:1,
      transition:{
          delay:.2,
          duration:0.6,
          ease:easing
      }
  }
};

const hoverEffect = {
  whileHover:{
      scale:1.5,rotate:630,borderRadius:"100%"
  },
  whileTap:{
      scale:.8,rotate:630,borderRadius:"100%"
  },
}


export {easing,stagger,fadeInUp,transition,letter,header,container,item,title,hoverEffect}