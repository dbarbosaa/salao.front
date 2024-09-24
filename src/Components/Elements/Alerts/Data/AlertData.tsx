

//Basic alert Data

export const BasicData = [
    {id: 1, heading:'Well done!', description: 'You successfully read this important alert message.', color:'success'},
    {id: 2,heading:'Heads up!', description: 'This alert needs your attention, but its not super important.', color:'info'},
    {id: 3,heading:'Warning!', description: 'Better check yourself, you are not looking too good.', color:'warning'},
    {id: 4,heading:'Oh snap!', description: 'Change a few things up and try submitting again.', color:'danger'}
]

//Outline alert Data
export const outlineAlert =[
    {id: 1,heading:'Well done!', description: 'You successfully read this important alert message.', class:'alert-outline-success'},
    {id: 2,heading:'Heads up!', description: 'This alert needs your attention, but its not super important.', class:'alert-outline-info'},
    {id: 3,heading:'Warning!', description: 'Better check yourself, you are not looking too good.', class:'alert-outline-warning'},
    {id: 4,heading:'Oh snap!', description: 'Change a few things up and try submitting again.', class:'alert-outline-danger'}

]
//Solid colored Alert

export const solidAlert =[
    {id: 1,heading:'Well done!', description: 'You successfully read this important alert message.', class:' alert-solid-success'},
    {id: 2,heading:'Heads up!', description: 'This alert needs your attention, but its not super important.', class:' alert-solid-info'},
    {id: 3,heading:'Warning!', description: 'Better check yourself, you are not looking too good.', class:' alert-solid-warning'},
    {id: 4,heading:'Oh snap!', description: 'Change a few things up and try submitting again.', class:' alert-solid-danger'}
]

//LINK COLOR ALERTS

export const linkAlert =[
    {id: 1,text: 'primary', color:'primary', class:''},
    {id: 2,text: 'secondary', color:'secondary', class:''},
    {id: 3,text: 'success', color:'success', class:''},
    {id: 4,text: 'danger', color:'danger', class:''},
    {id: 5,text: 'warning', color:'warning', class:''},
    {id: 6,text: 'info', color:'info', class:''},
    {id: 7,text: 'light', color:'light', class:''},
    {id: 8,text: 'dark', color:'dark', class:'mb-0'}
]

//DISMISSING ALERTS

export const dismissAlert =[
    {id: 1, color:'default', class:'fade show'},
    {id: 2, color:'success', class:'fade show'},
    {id: 3, color:'danger', class:'fade show'},
    {id: 4, color:'info', class:'fade show'}
]
//ALERT WITH ICON

export const iconAlert =[
    {id: 1, text: 'default', icon: <i className="fe fe-download"></i>, color:'default', class:''},
    {id: 2, text: 'primary', icon: <i className="fe fe-check-square"></i>, color:'primary', class:''},
    {id: 3, text: 'success', icon: <i className="fe fe-thumbs-up"></i>, color:'success', class:''},
    {id: 4, text: 'info', icon: <i className="ti-bell"></i>, color:'info', class:''},
    {id: 5, text: 'warning', icon: <i className="fe fe-info"></i>, color:'warning', class:''},
    {id: 6, text: 'danger', icon: <i className="fe fe-slash"></i>, color:'danger', class:'mb-0'}
]

//ALERT WITH ICON DISMISSING

export const iconDismissable = [
    {id: 1, text: 'default', icon: <i className="fe fe-download"></i>, color:'default', class:'fade show'},
    {id: 2, text: 'primary', icon: <i className="fe fe-check-square"></i>, color:'primary', class:'fade show'},
    {id: 3, text: 'success', icon: <i className="fe fe-thumbs-up"></i>, color:'success', class:'fade show'},
    {id: 4, text: 'info', icon: <i className="ti-bell"></i>, color:'info', class:'fade show'},
    {id: 5, text: 'warning', icon: <i className="fe fe-info"></i>, color:'warning', class:'fade show'},
    {id: 6, text: 'danger', icon: <i className="fe fe-slash"></i>, color:'danger', class:'fade show mb-0'}
]

