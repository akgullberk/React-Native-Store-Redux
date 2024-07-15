import {getUserLogin} from '../NetworkUrl';
import {post} from '../main';


const postUserApi = (username,password) =>{
  const credentials = {
    username,
    password,
  };

  return post(getUserLogin, credentials);
};

export {postUserApi};
