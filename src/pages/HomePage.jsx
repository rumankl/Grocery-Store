
import Feedback from '../Home/Feedback';
import Homeabout from '../Home/Homeabout';
import HomepageImage from '../Home/HomepageImage';
import Popup from '../Home/Popup';
import Timelines from '../Home/Timelines';


const HomePage = () => {

  return (
    <div >

      <Popup />
      <HomepageImage />
      <Homeabout />
      <Timelines />
      <Feedback />

    </div>
  );
};

export default HomePage;
