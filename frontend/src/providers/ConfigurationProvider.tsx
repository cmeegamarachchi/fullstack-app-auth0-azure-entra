import React from 'react';

interface ConfigurationProviderProps {
    apiBaeUrl: string;
    setApiBaseUrl: (url: string) => void;
}

const defaultConfiguration: ConfigurationProviderProps = {
    apiBaeUrl: '',
    setApiBaseUrl: () => {},
}

const ConfigurationContext = React.createContext<ConfigurationProviderProps>(defaultConfiguration);
ConfigurationContext.displayName = 'ConfigurationContext';

export const ConfigurationProvider = ({children}:{children: React.ReactNode}) => {
    const [ apiBaeUrl, setApiBaseUrl ] = React.useState<string>('');
    
    return (
        <ConfigurationContext.Provider value={{ apiBaeUrl, setApiBaseUrl }}>
            {children}
        </ConfigurationContext.Provider>
    );
}

export const useConfiguration = () => {
    const context = React.useContext(ConfigurationContext);

    if (!context) {
        throw new Error('useConfiguration must be used within a ConfigurationProvider');
    }

    return context;
}