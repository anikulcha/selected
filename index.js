import { Select } from "./select/select";
// import { Select } from './select/test-file';
import './select/style.scss';

const select = new Select('#select', {
    placeholder: 'Выберите пожалуйста пункт',
    data: [
        {id: 1, value: 'ReactJS'},
        {id: 2, value: 'AngulalJS'},
        {id: 3, value: 'VueJS'},
        {id: 4, value: 'React Native'},
        {id: 5, value: 'Next'},
        {id: 6, value: 'Nest'}
    ]
});    

window.s = select;