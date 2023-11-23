document.addEventListener('DOMContentLoaded', function() {
    const kubectlCommandLink = 'https://raw.githubusercontent.com/kodesam/openshift_cli_in_juypter/main/kubectl%20get%20nodes.yaml';
    const kubectlCommandElement = document.querySelector('a[href="' + kubectlCommandLink + '"]');

    fetch(kubectlCommandLink)
        .then(response => response.text())
        .then(yamlContent => {
            // Update the link with the YAML raw content as the href attribute
            kubectlCommandElement.setAttribute('href', 'data:yaml;charset=utf-8,' + encodeURIComponent(yamlContent));
        })
        .catch(error => {
            console.error('Error loading YAML content: ' + error);
        });
});
