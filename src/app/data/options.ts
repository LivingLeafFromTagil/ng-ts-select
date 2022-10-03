import { selectOption } from "../models/selectOption";

const options: selectOption[] = [
  {
    id: 0,
    optionTitle: 'На рассмотрении',
    color: {
      text: '#000000',
      background: '#FFFF00',
    }
  },
  {
    id: 1,
    optionTitle: 'В работе',
    color: {
      text: '#FFFFFF',
      background: '#0000FF',
    }
  },
  {
    id: 2,
    optionTitle: 'Выполнено',
    color: {
      text: '#000000',
      background: '#00FF00',
    }
  },
  {
    id: 3,
    optionTitle: 'Отказано',
    color: {
      text: '#000000',
      background: '#D66620',
    }
  }
];

export default options;