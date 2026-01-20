
---

# 🔐 Common Rules (Applies to ALL APIs)

**Base URL**

```
/api
```

**Auth**

```
Authorization: Bearer <JWT>
Content-Type: application/json
```

**Pagination (where supported)**

```
?page=1&limit=10
```

**Roles**

* `ADMIN`
* `FRANCHISE_ADMIN`

---

# 🏙️ City APIs (`/api/cities`)

**Access:** `ADMIN` only

---

## ➕ Create City

**POST** `/api/cities`

```json
{
  "name": "Karachi",
  "code": "KHI"
}
```

**Response**

```json
{
  "id": "uuid",
  "name": "Karachi",
  "code": "KHI",
  "status": "ACTIVE"
}
```

---

## 📄 Get All Cities (Paginated)

**GET** `/api/cities?page=1&limit=10`

**Response**

```json
{
  "items": [
    {
      "id": "uuid",
      "name": "Karachi",
      "code": "KHI",
      "status": "ACTIVE"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

---

## 🔍 Get Single City

**GET** `/api/cities/{id}`

---

## ✏️ Update City

**PATCH** `/api/cities/{id}`

```json
{
  "name": "Karachi Metropolitan"
}
```

---

## ❌ Deactivate City (Soft delete)

**DELETE** `/api/cities/{id}`

---

# 🏢 Franchise APIs (`/api/franchises`)

**Access:** `ADMIN` only

---

## ➕ Create Franchise

**POST** `/api/franchises`

```json
{
  "cityId": "uuid",
  "name": "Barqi Karachi Central",
  "code": "KHI-CENTRAL-01",
  "maxActiveRiders": 150
}
```

---

## 📄 Get All Franchises (Paginated + Filter)

**GET** `/api/franchises?page=1&limit=10`

**Filter by City**

```
/api/franchises?cityId=uuid&page=1&limit=10
```

---

## 🔍 Get Single Franchise

**GET** `/api/franchises/{id}`

---

## ✏️ Update Franchise

**PATCH** `/api/franchises/{id}`

```json
{
  "status": "ACTIVE",
  "maxActiveRiders": 200
}
```

---

## ❌ Terminate Franchise

**DELETE** `/api/franchises/{id}`

---

# 👤 Franchise Admin APIs (`/api/franchise-admins`)

**Access:** `ADMIN` only
**Defaults on create:** `role=OWNER`, `status=ACTIVE`

---

## ➕ Create Franchise Admin

**POST** `/api/franchise-admins`

```json
{
  "franchiseId": "uuid",
  "authUserId": "uuid"
}
```

---

## 📄 Get All Franchise Admins (Paginated)

**GET** `/api/franchise-admins?page=1&limit=10`

---

## 🔍 Get Single Franchise Admin

**GET** `/api/franchise-admins/{id}`

---

## ❌ Remove Franchise Admin

**DELETE** `/api/franchise-admins/{id}`

---

# 🧍 Rider APIs (`/api/riders`)

---

## ➕ Create Rider (Optional Documents)

**POST** `/api/riders`
**Role:** `FRANCHISE_ADMIN`

```json
{
  "franchiseId": "uuid",
  "cityId": "uuid",
  "fullName": "Ali Raza",
  "phone": "+923001234567",
  "vehicleType": "BIKE",
  "documents": [
    {
      "riderId": "ce3e5f94-392b-4f59-8594-6b9c3e16cd55",
      "documentType": "CNIC",
      "documentUrl": "https://cdn.barqibazar.com/docs/cnic.jpg"
    }
  ]
}
```

---

## 📄 Get All Riders (Paginated)

**GET** `/api/riders?page=1&limit=10`
**Roles:** `ADMIN`, `FRANCHISE_ADMIN`

---

## 🔍 Get Single Rider

**GET** `/api/riders/{id}`

---

## ✏️ Update Rider Profile

**PATCH** `/api/riders/{id}`
**Role:** `FRANCHISE_ADMIN`

```json
{
  "fullName": "Ali Raza Khan",
  "vehicleType": "MOTORBIKE"
}
```

---

## 🔄 Change Rider Status

**PATCH** `/api/riders/{id}/status`
**Roles:** `ADMIN`, `FRANCHISE_ADMIN`

```json
{
  "status": "APPROVED",
  "reason": "Documents verified"
}
```

## 📜 Get Rider Status History (Paginated)

**GET** `/api/riders/{id}/history?page=1&limit=10`

---

# 📄 Rider Document APIs (`/api/rider-docs`)

---

## ➕ Create / Replace Document

**POST** `/api/rider-docs`
**Role:** `FRANCHISE_ADMIN`

```json
{
  "riderId": "uuid",
  "documentType": "DRIVING_LICENSE",
  "documentUrl": "https://cdn.barqibazar.com/docs/license.jpg"
}
```

> One document per type per rider. Same type replaces existing.

---

## 📄 Get All Documents (Paginated)

**GET** `/api/rider-docs?page=1&limit=10`

---

## 📄 Get Documents by Rider

**GET** `/api/rider-docs/{riderId}`

---

## 🔍 Get Single Document

**GET** `/api/rider-docs/single/{id}`

---

## ✏️ Update Document

**PATCH** `/api/rider-docs/{id}`
**Role:** `FRANCHISE_ADMIN`

```json
{
  "documentUrl": "https://cdn.barqibazar.com/docs/license-updated.jpg",
  "verified": true
}
```

---

## ❌ Delete Document

**DELETE** `/api/rider-docs/{id}`

---

# ✅ Valid Enum Values

### `VehicleType`

```
BIKE | MOTORBIKE | CAR | VAN
```

### `DocumentType`

```
CNIC
DRIVING_LICENSE
VEHICLE_REGISTRATION
INSURANCE
PROFILE_PHOTO
ADDRESS_PROOF
OTHER
```

### `RiderStatus`

```
APPLIED
INTERVIEWED
APPROVED
ACTIVE
SUSPENDED
BLOCKED
```


---

## 📊 Stats Overview

**GET** `/api/stats/overview`
**Role:** `ADMIN`

### ✔ Returns

* Total cities
* Total franchises (grouped by status)
* Total franchise admins
* Total riders (grouped by status)

---

## 📊 Franchise Rider Stats

**GET** `/api/stats/franchise/{franchiseId}`
**Roles:** `ADMIN`, `FRANCHISE_ADMIN`

### ✔ Returns

* Franchise name
* City name
* Rider counts grouped by status

---

# ⚠️ Error Behavior (Consistent)

| Case               | Status | Message                       |
| ------------------ | ------ | ----------------------------- |
| Invalid enum       | 400    | Invalid request payload       |
| Duplicate doc type | 409    | Duplicate document type       |
| Invalid FK         | 400    | Invalid riderId / franchiseId |
| Not found          | 404    | Resource not found            |

---
