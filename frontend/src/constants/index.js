export const DateOptions = [
    { label: "Latest", value: "Latest" },
    { label: "Last Hour", value: "LastHour" },
    { label: "Last 24 hours", value: "Last24hour" },
    { label: "Last 7 days", value: "Last7days" },
    { label: "Last 14 days", value: "Last14days" },
    { label: "Last 30 days", value: "Last30days" },
  ];
  export const JobSchema  =["Work From Home","Remote","Hybrid","Work From Office"]
  export const TypeofEmployment = ["Freelance","Internship","Part Time","Full Time"];
  export const WorkExperience = ["Fresher","0-3 Years","0-3 Years","3-6 Years","6+ Years"];
  export const WhatsappTemplate = (phone,name) =>{
    if(phone==="") return phone;
    const str =`https://api.whatsapp.com/send?phone=${phone}&text=Reference:Jobcy;\n Hi ${name}, i've some work for you, please lemme know if you're available`
    return str
  }