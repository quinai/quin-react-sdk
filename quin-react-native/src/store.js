class UserStore {
  constructor() {
    this.keys = {
      userId: "quin:userId",
      token: "quin:token",
      gcid: "quin:gcid"
    };
  }

  load() {
    const userId = localStorage.getItem(this.keys.userId);
    if (!userId) {
      console.log("quin store load: userId is empty");
      return null;
    }

    const token = localStorage.getItem(this.keys.token);
    if (!token) {
      console.log("quin store load: token is empty");
      return null;
    }

    const gcid = localStorage.getItem(this.keys.gcid) || "";
    return { id: userId, token, googleClientId: gcid };
  }

  save(user) {
    localStorage.setItem(this.keys.userId, user.id);
    localStorage.setItem(this.keys.token, user.token);
    
    if (user.googleClientId) {
      localStorage.setItem(this.keys.gcid, user.googleClientId);
    }
  }
}


