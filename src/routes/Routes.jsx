import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout'
import Services from '../pages/Services';
import { Home } from 'lucide-react';
import Community from '../components/home/Community';
import FeedbackSection from '../pages/FeedbackSection';

const routes = createBrowserRouter([  
    {
        path: "/",
        element: <Layout/>,
        Children: [
            {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "community",
        element: <Community />
      },
      {
        path: "feedbackSection",
        element: <FeedbackSection />
      }
        ]
    }
])
export default routes
              
