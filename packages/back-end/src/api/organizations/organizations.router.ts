import { Router } from "express";
import { postOrganization } from "./postOrganization";
import { listOrganizations } from "./listOrganizations";

const router = Router();

// Organization Endpoints
// Mounted at /api/v1/organizations
router.get("/", listOrganizations);
router.post("/", postOrganization);

export default router;
