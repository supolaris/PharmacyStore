import React, {useState, useContext, useEffect} from 'react';
import UserContext from './userContexttttttttt';

const userContext = useContext(UserContext);

const Routes = () => {
  const [screenState, setScreenState] = useState('');
  const [msisdn, setMsisdn] = useState('');
  const [userData, setUserData] = useState(null);
  const [discoverListData, setDiscoverListData] = useState(null);
  //Used for implementing lazy loading
  const [tempDiscoverListData, setTempDiscoverListData] = useState(null);
  const [searchVideosListData, setSearchVideosListData] = useState(null);
  const [contentCreatorVideosList, setContentCreatorVideosList] =
    useState(null);
  const [hashTagVideosList, setHashTagVideosList] = useState(null);
  const [userOwnVideos, setUserOwnVideos] = useState(null);
  const [tempUserOwnVideos, setTempUserOwnVideos] = useState(null);
  const [tempUserLikedVideos, setTempUserLikedVideos] = useState(null);
  const [userLikedVideos, setUserLikedVideos] = useState(null);
  const [totalLikes, setTotalLikes] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [videoObject, setVideoObject] = useState(null);
  const [soundProfileVideoList, setSoundProfileVideoList] = useState(null);
  const [forYouVideoList, setForYouVideoList] = useState(null);
  const [isAudience, setIsAudience] = useState(false);
  const [totalCoins, setTotalCoins] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [globalPauseHome, setGlobalHomePause] = useState(false);
  const [hashtagToAdd, setHashtagToAdd] = useState(null);

  //Report Video
  const [reportReasonsList, setReportReasonsList] = useState([]);

  const updateVideoObject = value => {
    setVideoObject(value);
  };

  const updateAudienceState = value => {
    setIsAudience(value);
  };
  const updateScreenState = value => {
    setScreenState(value);
  };
  const updatemsisdn = value => {
    setMsisdn(value);
  };
  const updateUserData = value => {
    setUserData(value);
  };

  const updateUserOwnVideos = value => {
    setUserOwnVideos(value);
  };
  const updateTempUserOwnVideos = value => {
    setTempUserOwnVideos(value);
  };
  const updateTempUserLikedVideos = value => {
    setTempUserLikedVideos(value);
  };
  const updateUserLikedVideos = value => {
    setUserLikedVideos(value);
  };
  const updateDiscoverListData = value => {
    setDiscoverListData(value);
  };
  const updateTempDiscoverListData = value => {
    setTempDiscoverListData(value);
  };
  const updateHashTagVideosList = value => {
    setHashTagVideosList(value);
  };
  const updateContentCreatorVideosList = value => {
    setContentCreatorVideosList(value);
  };
  const updateSearchVideosListData = value => {
    setSearchVideosListData(value);
  };
  const updateTotalLikes = value => {
    setTotalLikes(value);
  };

  const updateLoaded = value => {
    setLoaded(value);
  };

  const updateTotalCoins = value => {
    setTotalCoins(value);
  };
  const updateExchangeRate = value => {
    setExchangeRate(value);
  };

  const updateGlobalPauseHome = value => {
    setGlobalHomePause(value);
  };
  const updateHashtags = value => {
    setHashtagToAdd(value);
  };
  const updateSoundProfileVideoList = val => {
    setSoundProfileVideoList(val);
  };
  const updateForYouVideoList = val => {
    setForYouVideoList(val);
  };
  const updateReportReasons = _reportReasonsList => {
    setReportReasonsList(_reportReasonsList);
  };

  useEffect(() => {
    initVideoEditor();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isAudience,
        screenState,
        msisdn,
        userData,
        discoverListData,
        tempDiscoverListData,
        contentCreatorVideosList,
        forYouVideoList,
        totalLikes,
        searchVideosListData,
        soundProfileVideoList,
        hashTagVideosList,
        userOwnVideos,
        userLikedVideos,
        tempUserLikedVideos,
        tempUserOwnVideos,
        loaded,
        hashtagToAdd,
        reportReasonsList,

        updateScreenState,
        updatemsisdn,
        updateUserData,
        updateDiscoverListData,
        updateTempDiscoverListData,
        updateContentCreatorVideosList,
        updateTotalLikes,
        updateSearchVideosListData,
        updateHashTagVideosList,
        updateUserOwnVideos,
        updateTempUserLikedVideos,
        updateTempUserOwnVideos,
        updateSoundProfileVideoList,
        updateForYouVideoList,
        updateUserLikedVideos,
        updateLoaded,
        updateAudienceState,
        videoObject,
        updateVideoObject,
        totalCoins,
        updateTotalCoins,
        exchangeRate,
        updateExchangeRate,
        globalPauseHome,
        updateGlobalPauseHome,
        updateHashtags,
        updateReportReasons,
      }}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default Routes;
