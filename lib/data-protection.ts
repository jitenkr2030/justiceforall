import { encrypt, decrypt } from "./encryption"

export function anonymizeData(data: any): any {
  if (typeof data === "string") {
    return encrypt(data)
  }
  if (Array.isArray(data)) {
    return data.map((item) => anonymizeData(item))
  }
  if (typeof data === "object" && data !== null) {
    const anonymizedData: any = {}
    for (const key in data) {
      if (key === "id" || key === "email" || key === "name" || key === "phone") {
        anonymizedData[key] = encrypt(data[key])
      } else {
        anonymizedData[key] = anonymizeData(data[key])
      }
    }
    return anonymizedData
  }
  return data
}

export function deanonymizeData(data: any): any {
  if (typeof data === "string") {
    try {
      return decrypt(data)
    } catch {
      return data
    }
  }
  if (Array.isArray(data)) {
    return data.map((item) => deanonymizeData(item))
  }
  if (typeof data === "object" && data !== null) {
    const deanonymizedData: any = {}
    for (const key in data) {
      deanonymizedData[key] = deanonymizeData(data[key])
    }
    return deanonymizedData
  }
  return data
}

export function applyDataRetentionPolicy(data: any, retentionPeriodDays: number): any {
  const now = new Date()
  const retentionDate = new Date(now.getTime() - retentionPeriodDays * 24 * 60 * 60 * 1000)

  if (Array.isArray(data)) {
    return data.filter((item) => new Date(item.createdAt) >= retentionDate)
  }
  if (typeof data === "object" && data !== null) {
    if (data.createdAt && new Date(data.createdAt) < retentionDate) {
      return null
    }
    const retainedData: any = {}
    for (const key in data) {
      const retainedValue = applyDataRetentionPolicy(data[key], retentionPeriodDays)
      if (retainedValue !== null) {
        retainedData[key] = retainedValue
      }
    }
    return retainedData
  }
  return data
}

