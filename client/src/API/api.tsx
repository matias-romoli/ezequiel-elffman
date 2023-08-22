export async function dataUser(data: any) {
  try {
    const res = await fetch("https://ezequiel-elffman.onrender.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res;
  } catch (error) {
    return error;
  }
}
