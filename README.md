# n8n-nodes-lucidlink

This is an n8n community node for [LucidLink](https://www.lucidlink.com/). It lets you interact with the self-hosted **LucidLink LucidAPI** from your n8n workflows.

LucidLink is a cloud-native file system that lets teams work with large files stored in object storage (e.g. Amazon S3) as if they were local. The LucidAPI is a REST API that ships with self-hosted LucidLink deployments and gives programmatic control over filespaces, entries, groups, members, permissions, and more.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

The package name is **`n8n-nodes-lucidlink`**.

---

## Operations

This node covers 9 resources and 38 operations against the LucidLink LucidAPI v1.4.2.

### Direct Link

| Operation | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| Generate  | Generate a shareable direct link to a filesystem entry by ID or path |

### Filespace

| Operation | Description            |
| --------- | ---------------------- |
| Create    | Create a new filespace |
| Get Many  | List all filespaces    |
| Get       | Get a filespace by ID  |
| Update    | Rename a filespace     |
| Delete    | Delete a filespace     |

### Entry

| Operation     | Description                             |
| ------------- | --------------------------------------- |
| Create        | Create a new directory entry            |
| Get           | Get an entry by ID                      |
| Resolve       | Resolve an entry by its filesystem path |
| List Children | List the children of a directory entry  |
| Delete        | Delete an entry by ID                   |

### Data Store

| Operation          | Description                                |
| ------------------ | ------------------------------------------ |
| Create             | Create a new S3 data store                 |
| Get Many           | List all data stores in a filespace        |
| Get                | Get a data store by ID                     |
| Update Credentials | Update the S3 credentials for a data store |
| Delete             | Delete a data store                        |

### External Entry

| Operation | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| Create    | Create a new external entry (SingleObjectFile or HttpLinkFile)    |
| Update    | Update the URL of an existing HTTP link file entry                |
| List IDs  | List external entry IDs in a data store                           |
| Delete    | Delete an external entry                                          |

### Group

| Operation        | Description                                    |
| ---------------- | ---------------------------------------------- |
| Create           | Create a new group                             |
| Get Many         | List groups (optionally filter by name)        |
| Get              | Get a group by ID                              |
| Update           | Update a group                                 |
| Delete           | Delete a group                                 |
| Get Members      | List members of a group                        |
| Add Member       | Add a single member to a group                 |
| Bulk Add Members | Add multiple members across groups in one call |
| Remove Member    | Remove a member from a group                   |

### Member

| Operation   | Description                               |
| ----------- | ----------------------------------------- |
| Add         | Add a new member                          |
| Get Many    | List members (optionally filter by email) |
| Get         | Get a member by ID                        |
| Update Role | Update a member's role                    |
| Delete      | Delete a member                           |
| Get Groups  | List the groups a member belongs to       |

### Permission

| Operation | Description                                 |
| --------- | ------------------------------------------- |
| Grant     | Grant a permission on a path to a principal |
| List      | List permissions in a filespace             |
| Update    | Update an existing permission               |
| Revoke    | Revoke a permission                         |

### Provider

| Operation | Description                                        |
| --------- | -------------------------------------------------- |
| Get Many  | List available storage providers and their regions |

---

## Credentials

The LucidLink LucidAPI is self-hosted, so you configure the connection endpoint in n8n's credential settings rather than using a fixed URL.

### Prerequisites

- A running LucidLink API deployment | [deployment guide](https://support.lucidlink.com/hc/en-us/articles/40221700126605-Deployment-Usage-LucidLink-API-Container)
- A service account bearer token

### Setup

1. In n8n, go to **Credentials → New** and search for **LucidLink API**.
2. Fill in the two fields:

   | Field         | Description                                             | Example                 |
   | ------------- | ------------------------------------------------------- | ----------------------- |
   | **Base URL**  | Full base URL of your LucidAPI instance, including port | `http://localhost:7778` |
   | **API Token** | Bearer token for your service account                   | `eyJ...`                |

3. Click **Save** — n8n will test the credential by hitting `GET /api/v1/health` and confirm it can connect.

---

## Compatibility

- **Minimum n8n version:** 1.0.0
- **LucidAPI version:** 1.4.2
- Tested against n8n `1.x` running on Node.js 20+

---

## Usage

### Self-hosted base URL

Because the LucidAPI is self-hosted, the base URL must be set in your credentials. Every user or team running their own LucidLink deployment will have a different address (e.g. `http://192.168.1.10:7778` or `https://lucidapi.mycompany.com`).

### Filespace-scoped resources

Several resources (Direct Link, Entry, Data Store, External Entry, Permission) require a **Filespace ID**. This appears as a shared field at the top of the node when one of those resources is selected.

### Cursor-based pagination

### External Entry kinds

When creating an external entry, select the **Kind**:

- **Single Object File (S3)** — links a file from an S3 bucket. Requires a Data Store ID and S3 Object ID.
- **HTTP Link File** — links a file accessible via a public HTTP/HTTPS URL. Requires only the URL.

The **Update** operation is only applicable to `HttpLinkFile` entries and updates the linked URL.

### Cursor-based pagination

The following operations support cursor-based pagination via `limit` and `Next Cursor` fields:

- Entry → List Children
- External Entry → List IDs
- Permission → List

Pass the `nextCursor` value returned in a previous response into the **Next Cursor** field to fetch the next page. Use a Loop node to iterate through all pages automatically.

### Bulk add group members

The **Group → Bulk Add Members** operation accepts a list of `{ groupId, memberId }` pairs in a single API call (up to 100 items). Use the **Add item** button in the node UI to build the list.

### Creating a filespace with customer storage

When creating a filespace with `storageOwner = customer`, an additional set of S3 fields appears: Access Key ID, Secret Access Key, and optional Endpoint and Bucket Name.

---

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [LucidLink website](https://www.lucidlink.com/)
- [LucidLink Knowledge Base](https://support.lucidlink.com/hc/en-us)
- LucidAPI reference — available at `<Base_URL>/api/v1/docs/` once your LucidLink API instance is running
- [Node source code](https://github.com/LucidCodeLab/n8n-nodes-lucidlink)

---

## Version history

### 0.1.5

Aligned with LucidLink LucidAPI v1.4.2:

- **External Entry → Create**: added `HttpLinkFile` kind support — choose between `SingleObjectFile` (S3) and `HttpLinkFile` (public HTTP URL) when creating an external entry
- **External Entry → Update**: new operation to update the URL of an existing `HttpLinkFile` entry (`PATCH /api/v1/filespaces/{filespaceId}/external/entries/{entryId}`)
- **Data Store → Create**: corrected minimum value for `URL Expiration (Minutes)` from 360 to 4320 (3 days) to match the API spec

### 0.1.3

- Added **Direct Link** resource with a Generate operation (`GET /api/v1/filespaces/{filespaceId}/direct-links`)

### 0.1.0

Initial release. Covers the full LucidLink LucidAPI v1.3.0 surface:

- 8 resources: Filespace, Entry, Data Store, External Entry, Group, Member, Permission, Provider
- 36 operations
- Configurable base URL and bearer token credentials
