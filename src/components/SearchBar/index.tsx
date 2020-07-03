import React, { useState, useEffect } from 'react';
import {
  Search,
  Icon,
  SearchIcon,
  ArrowIcon,
  SpinnerContainer,
  Circle,
} from './styles';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [canRotate, setCanRotate] = useState(false);
  const [searchIcon] = useState(
    'M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z',
  );
  const [arrowIcon] = useState(
    'M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z',
  );

  let timing: any;
  function typing(): void {
    clearTimeout(timing);
    setIsTyping(true);
  }

  function stopTyping(): void {
    clearTimeout(timing);

    timing = setTimeout(() => {
      setIsTyping(false);
    }, 500);
  }

  useEffect(() => {
    if (isSearchFocus) {
      setCanRotate(true);
    }
  }, [isSearchFocus]);

  return (
    <Search>
      {isSearchFocus ? (
        <ArrowIcon
          marginLeft={15}
          marginRight={0}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          rotation={isSearchFocus}
          canRotate={canRotate}
          deg={isSearchFocus ? 0 : -90}
        >
          <path fill="#33B7F6" d={arrowIcon} />
        </ArrowIcon>
      ) : (
        <SearchIcon
          marginLeft={15}
          marginRight={0}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          rotation={isSearchFocus}
          canRotate={canRotate}
          deg={isSearchFocus ? 90 : 0}
        >
          <path fill="#919191" d={searchIcon} />
        </SearchIcon>
      )}

      <input
        type="text"
        placeholder="Search or start new chat"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={typing}
        onFocus={() => setIsSearchFocus(true)}
        onBlur={() => setIsSearchFocus(false)}
        onKeyUp={stopTyping}
        value={search}
      />
      {isTyping ? (
        <SpinnerContainer viewBox="0 0 54 54">
          <Circle cx="26px" cy="26px" r="20px" fill="none" />
        </SpinnerContainer>
      ) : (
        search && (
          <Icon
            marginLeft={0}
            marginRight={15}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => setSearch('')}
          >
            <path
              fill="#919191"
              d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"
            />
          </Icon>
        )
      )}
    </Search>
  );
};

export default SearchBar;
