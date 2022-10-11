import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

import './list.css';
import SearchItem from '../../components/searchItem/SearchItem';
import Footer from '../../components/footer/Footer';

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <Navbar />
      <Header type='list' />

      <div className='list-container'>
        <div className='list-wrapper'>
          <div className='list-search'>
            <h1 className='ls-title'>Search</h1>
            <div className='ls-item'>
              <label>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className='ls-item'>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className='ls-item'>
              <label>Options</label>
              <div className='ls-options'>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='ls-option-input' />
                </div>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' className='ls-option-input' />
                </div>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>Adult</span>
                  <input
                    type='number'
                    className='ls-option-input'
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>Children</span>
                  <input
                    type='number'
                    className='ls-option-input'
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>Room</span>
                  <input
                    type='number'
                    className='ls-option-input'
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='list-result'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default List;
