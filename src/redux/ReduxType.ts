export interface IAuthSliceInitialState {
  isLogin: boolean;
  token: string | null;
  isFirstTimeOnBoarding: boolean;
  isOtpVerify: boolean;
  userCreateAccountData: {
    userId: string;
    phone: string;
    code: string;
    fullname: string;
    dob: string;
    age: string | number
    gender: null;
    carrerStage: string;
    careerGoals: [];
    userStatement: string;
    hereAboutThinkle: string;
  };
  preScreenGiftWrap: {
    assessment: boolean
    discovery: boolean
    wallet: boolean
    coaching: boolean
    library: boolean
  };
  date:{
    startMonth: string
    endMonth: string
    startYear:string
    endYear:string
  },
  fcmToken: any
  swipeEnabled: boolean
  referral: string
}

export interface IUserSliceInitialState {
  skill: [];
  notificationCheck?: string;
  userInfo: {
    id: string
    appFeedbackGiven: boolean;
    image: string;
    fullname: string;
    dob: string;
    email: string;
    socialMediaLinks: {
      plateform: string;
      url: string;
    }[];
    education: {
      institution: {
        [x: string]: any;
        instituteName: string;
      };
      degree: {
        degreeName: string;
        year: number;
      };
      levelOfEducation: string;
      fieldOfStudy: string;
      startDate: string;
      endDate: string;
    }[];
    experience: {
      company: {
        companyLogo: {
          url: string;
        };
        companyName: string;
      };
      title: string;
      employmentType: string;
      industry: string;
      currentlyWorking: string;
      location: string;
      technologies: [];
      endDate: string;
      startDate: string;
    }[];
    preferences: {
      technologies: [];
      industries: [];
    };
    supportChannelId: string;
    supportPic: string;
    supportReceiverId: string;
    supportUCID: number;
    SupportName: boolean;
    subscriptionPlan: string;
    isLinkedInImported: boolean
    personalizedEmails: boolean
    personalizedInAppRecommendations: boolean
    referralCode: string
    uuid: string
  } | null;
}

export interface IGlobleSliceInitialState {
  selectedTimeSlots: [];
}
