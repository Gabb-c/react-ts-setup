import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // This adapter isn't official. It will be updated when soon

Enzyme.configure({ adapter: new Adapter() });
