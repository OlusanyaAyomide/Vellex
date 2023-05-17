export const toggleCenter = () => {
    return {
      initial: {
        height: "4px",
        x: 0,
        opacity: 1,
      },
      animate: {
        x: -50,
        opacity: 0,
        height: "0px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
      animateback: {
        x: 0,
        opacity: 1,
        height: "4px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
    };
  };
  export const toggleAnimation = (number:number) => {
    return {
      initial: {
        rotate: 0,
        height: "4px",
        y: 0,
      },
      animate: {
        rotate: number === 1 ? "45deg" : "-45deg",
        y: number === 1 ? 8.2 : -8.2,
        height: "3px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
      animateback: {
        rotate: 0,
        height: "4px",
        y: 0,
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
    };
  };

export const HeroContainer = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      when:"beforeChildren",
      staggerChildren:0.3
    }
  }
}

export const HeroItems={
  initial:{
    opacity:0,
    y:50
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:0.3
    }
  }
}