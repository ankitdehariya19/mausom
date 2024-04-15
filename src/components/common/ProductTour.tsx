import React, { useState, useEffect } from 'react';
import Joyride, { Step, CallBackProps, State } from 'react-joyride';

const ProductTour: React.FC = () => {
  const [run, setRun] = useState(false);
  const steps: Step[] = [
    {
      target: '.search-bar',
      title: 'Click the Menu Button',
      content: 'Use the Menu button at the top right of the page to open the search and history panel.',
    },
    {
      target: '.location-info',
      title: 'Select a Location',
      content: 'After clicking the menu button, you can select a country and a city from the dropdown menus to get the weather information.',
    },
    {
      target: '.search-history',
      title: 'Manage Search History',
      content: 'Your search history is saved and can be accessed from the left-hand side of the panel. You can select a previously searched city to view its weather details, and you can also clear your search history.',
    },
    {
      target: '.weather-details',
      title: 'View Weather Details',
      content: 'Once you\'ve selected a location, you\'ll see the current weather conditions and a forecast for the next few days.',
    },
  ];

  useEffect(() => {
    setRun(true);
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, type } = data;
    if ((action as string) === 'finished' || (action as string) === 'skipped') {
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      callback={handleJoyrideCallback}
    />
  );
};

export default ProductTour;