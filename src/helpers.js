export const checkBudget = (budget, remaining) => {
    let color;

    if((budget /4) > remaining){
        color = 'alert alert-danger';
    }else if((budget / 2) > remaining){
        color = 'alert alert-warning'
    }else{
        color='alert alert-success'
    }

    return color;
}