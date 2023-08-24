
export async function gitHubRepos(token) {
  try {
    const response = await fetch('https://api.github.com/users/Cecimartinez/repos', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error fetching repositories: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error.message}`);
  }
}