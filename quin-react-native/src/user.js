export const User = {
  id: string,
  token: string,
  sessionid: string,
  googleClientId: string
};

export const createUser = (id,token, sessionId, googleClientId = '') => {
  return {
  id,
  token,
  sessionId,
  googleClientId
  }
};