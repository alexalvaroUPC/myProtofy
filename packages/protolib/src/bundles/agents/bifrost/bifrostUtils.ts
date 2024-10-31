export const heartbeatTimeout = 15_000 // 30 seconds
export const defActionEndpoint = (agentName: string, subsystemName: string, actionName: string) => `agents/${agentName}/subsystem/${subsystemName}/action/${actionName}`
export const defMonitorEndpoint = (agentName: string, subsystemName: string, monitorName: string) => `agents/${agentName}/subsystem/${subsystemName}/monitor/${monitorName}`