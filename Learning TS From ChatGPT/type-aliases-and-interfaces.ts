type User = {
  username: string;
  email: string;
  phoneNumber?: number;
};

interface Admin extends User {
  role: "admin";
}

function printUserInfo(user: User | Admin): void {
  console.log(`Username: ${user.username}, Email: ${user.email}`);

  if ("role" in user) {
    console.log(`Role: ${user.role}`);
  }
}

const user1: User = {
  username: "mantragor",
  email: "mgor@gmail.com",
};

const adminUser: Admin = {
  username: "ad_mantra_gor",
  email: "contactme@mantragor.com",
  role: "admin",
};

printUserInfo(user1);
printUserInfo(adminUser);
