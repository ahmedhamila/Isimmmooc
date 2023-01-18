import React from 'react'
import Button from '@mui/material/Button'
const themes={
  ThemePrimaryEmpty:{
    backgroundColor:'#fff',
    color:'#453D80',
    "&:hover" : {
      backgroundColor : '#453D80',
      color: '#fff'  ,
    }
  },
  ThemePrimaryFilled:{
    backgroundColor:'#453D80',
    color:'#fff',
    "&:hover" : {
      backgroundColor : '#fff',
      color: '#453D80'  ,
    }
  },
  ThemeSecondaryEmpty:{
    backgroundColor:'#fff',
    color:'#FF7468',
    "&:hover" : {
      backgroundColor : '#FF7468',
      color: '#fff'  ,
    }
  },
  ThemeSecondaryFilled:{
    backgroundColor:'#FF7468',
    color:'#fff',
    "&:hover" : {
      backgroundColor : '#fff',
      color: '#FF7468'  ,
    }
  },
  ThemeTransparent:{
    backgroundColor:'transparent',
    color:'#fff',
  },
}
function ThemedButton(props) {
    const {
        onClick,
        theme,
        sx,
        variant,
        value,
        size
    } = props
    console.log(onClick)
    if(theme){
      if(themes[theme])
      {
        if(themes[theme].backgroundColor)
          sx['backgroundColor'] = themes[theme].backgroundColor
        if(themes[theme].color)
          sx['color'] = themes[theme].color
        if(themes[theme]['&:hover'])
          sx['&:hover'] = themes[theme]['&:hover']
      }
      
    }

  return (
    <Button  size={size} variant={variant} sx={sx}>
        {value}
    </Button>
  )
}

export default ThemedButton