import { Categories } from "./entities/cateogory/cateogories.js";
import { Companies } from "./entities/company/companies.js";
import { AppliedJobs } from "./entities/jobs/appliedJobs.js";
import { JobTypes } from "./entities/jobs/jobTypes.js";
import { Jobs } from "./entities/jobs/jobs.js";
import { CompanyRatings } from "./entities/ratings/companyRatings.js";
import { JobRatings } from "./entities/ratings/jobRatings.js";
import { MemberRatings } from "./entities/ratings/memberRatings.js";
import { Member } from "./entities/user/member.js";
import { MoreInfo } from "./entities/user/moreInfo.js";
import { MyListings } from "./entities/user/myListings.js";
import { Notifications } from "./entities/user/notifications.js";
import { Tokens } from "./entities/user/tokens.js";

const JOBS = [Jobs, JobTypes, JobRatings, AppliedJobs]
const COMPANY = [Companies, CompanyRatings]
const CATEGORY = [Categories]
const USER = [Member, MoreInfo, Tokens, MyListings, Notifications, MemberRatings,];
export const Entities = [...USER,...CATEGORY,...JOBS,...COMPANY];
