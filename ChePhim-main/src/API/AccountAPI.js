import { api } from "./api";
import queryString from "query-string";

const getAccountAPIList = (filter) => {
  // console.log("filter getAccountAPIList: ", filter);
  // page = 1, size = 10
  const parameters = {};

  if (filter && filter.page) {
    parameters.page = filter.page;
  }
  if (filter && filter.size) {
    parameters.size = filter.size;
  }

  // sort: { sortField: "id", sortDirection: "asc" },
  if (filter && filter.sort) {
    parameters.sort = filter.sort.sortField + "," + filter.sort.sortDirection;
  }
  // search = ""
  if (filter && filter.search) {
    parameters.search = filter.search;
  }

  console.log("parameters: ", parameters);
  // Sử dụng thư viện queryString để chuyển đổi đối tượng thành các param
  // https://www.npmjs.com/package/query-string
  let url = "accounts?" + queryString.stringify(parameters);
  // accounts?page=1&size=10
  console.log("Link url: ", url);

  return api("GET", url, null, null);
};

// Check exist by Email
const getEmailExists = (email) => {
  let url = "accounts/email/" + email;
  return api("GET", url, null);
};

// Check exist by Username
const getUsernameExists = (username) => {
  let url = "accounts/username/" + username;
  return api("GET", url, null);
};

// Add Account New
const addAccountNewAPI = (AccountNew) => {
  return api("POST", "accounts/", AccountNew);
};

// Xóa Account
const deleteAccountAPI = (id) => {
  let url = "accounts/" + id;
  return api("DELETE", url, null, null);
};
// Update Account
const updateAccountAPI = (id, accountUpdate) => {
  let url = "accounts/" + id;
  return api("PUT", url, accountUpdate);
};

// export

export { getAccountAPIList, getEmailExists, getUsernameExists, addAccountNewAPI, deleteAccountAPI, updateAccountAPI };
