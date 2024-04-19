const url = 'https://api-qa-spaces-target.onrender.com';
// const url = 'http://localhost:3001';

export async function fetchSpaceContent(space) {
  try {
    const config = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    const endpoint = `${url}/space/clean/${space}`;
    const response = await fetch(endpoint, config);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return {status: 500, message: 'Parece ser um erro interno do servidor. Tente recarregar a página.'};
  }
}
