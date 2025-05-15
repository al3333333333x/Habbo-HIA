
import {
  submitBadgeRequest,
  fetchBadgeRequests,
  updateBadgeRequestStatus
} from "../models/badgeModel.js";

export const handleSubmitBadge = (data) => submitBadgeRequest(data);
export const handleFetchBadges = () => fetchBadgeRequests();
export const handleUpdateBadgeStatus = (id, status) => updateBadgeRequestStatus(id, status);
