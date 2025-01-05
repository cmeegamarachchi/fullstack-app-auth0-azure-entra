# Use a base image with common tools installed
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04

# Install Docker
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release && \
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list && \
    apt-get update && apt-get install -y docker-ce docker-ce-cli containerd.io && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Docker Compose
RUN curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Python
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-dev \
    python3-venv \
    build-essential && \
    pip3 install --upgrade pip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Create the 'docker' group if it doesn't exist and add 'vscode' to the group
RUN groupadd -f docker && usermod -aG docker vscode || true

# Install Azure CLI
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

# Install Azure Static Web Apps CLI
RUN npm install -g @azure/static-web-apps-cli && \
    npm install -g azure-functions-core-tools@4 --unsafe-perm true

# Install Prettier, Black, and Yarn
RUN npm install --global prettier && \
    pip3 install black && \
    npm install --global yarn && \
    npm upgrade --global yarn

# Set the default shell
CMD [ "bash" ]
