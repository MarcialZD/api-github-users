new Vue({
    el: '#app',
    data: {
        username: '',
        repos: null,
    },
    methods: {
        async fetchRepos() {
            if (this.username) {
                try {
                    const response = await fetch(`https://api.github.com/users/${this.username}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    const data = await response.json();
                    this.repos = data.public_repos;
                } catch (error) {
                    console.error("Error fetching data: ", error);
                    this.repos = null;
                }
            } else {
                this.repos = null;
            }
        }
    }
});
