import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

const getEmployees = async () => {
  try {
    const res = await axios.get(`${baseUrl}/members`);
    return res.data.members;
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
};

const getMembers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/teamMembers`);
    return res.data.teamMembers;
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
};

export { getEmployees, getMembers };
