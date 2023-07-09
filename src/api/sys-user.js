import request from "@/request";

export function login(username, password) {
  return request.post('/sys/security/login', {
    username,
    password
  });
}