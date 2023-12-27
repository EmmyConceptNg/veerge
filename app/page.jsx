'use client';
import Charts from '@/components/charts';
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Icon as Iconify } from '@iconify/react';

export default function Home() {
  return (
    <main>
      <Box px="150px" mt={5}>
        <Box>
          <Box display={'flex'}>
            <Image src="/icon/hand.svg" alt="" />
            <Text fontSize="lg" style={{ fontWeight: 'bold' }}>
              Hi Ahmed
            </Text>
          </Box>
          <Text fontSize="xs">Welcome to your Dashboard</Text>
        </Box>

        {/* First Grid */}
        <Box mt={10}>
          <Grid templateColumns={'65% 1fr'} gap={6}>
            <GridItem w="100%" bg="#fff" rounded={20} p={6}>
              {/* Sales Overview */}
              <SalesOverview />
            </GridItem>
            <GridItem w="100%">
              <Stack spacing={5}>
                {/* Property Overview */}
                <PropertyOverview />

                {/* Customer Overview */}
                <CustomerOverview />
              </Stack>
            </GridItem>
          </Grid>
        </Box>

        {/* Second Grid */}
        <Box mt={10}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={'space-between'}
            gap={5}
          >
            <GridItem w="100%" bg="white" rounded={20} p={6}>
              <ListingOverview />
            </GridItem>
            <GridItem w="100%" bg="white" rounded={20} p={6}>
              <OutstandingBalance />
            </GridItem>
            <GridItem w="100%" bg="white" rounded={20} p={6}>
              <TopSelling />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </main>
  );
}

// Sales Overview

function SalesOverview() {
  return (
    <>
      <HStack justifyContent={'space-between'}>
        <Box>
          <Text fontSize="lg" style={{ fontWeight: 'bold' }}>
            Sales Overview
          </Text>
          <Text fontSize="xs">Showing overview Jan 2022 - Sep 2022</Text>
        </Box>
        <Box
          bg={'#fff'}
          style={{ border: '1px solid #CBCBCB' }}
          py="2"
          px="4"
          rounded={10}
        >
          <Text fontSize="xs" color="CBCBCB">
            View Transaction
          </Text>
        </Box>
      </HStack>
      <Box display={'flex'} mt={3}>
        <HStack spacing={12} ml="auto" align="center">
          <Text fontSize="sm">1 Week</Text>
          <Text fontSize="sm">1 Month</Text>
          <Button colorScheme="gray">1 Year</Button>
        </HStack>
      </Box>
      <Divider my={3} />
      <Box mt={5}>
        <Grid templateColumns={'55% 1fr'} gap={10}>
          <GridItem w="100%" bg="#fff">
            <Charts />
          </GridItem>
          <GridItem w="100%" bg="#fff">
            <Box>
              <HStack spacing={3}>
                <Card
                  style={{
                    border: '1px solid #E4E4E4',
                    borderRadius: '12px',
                    width: '100%',
                  }}
                >
                  <CardBody>
                    <Text color="#4545FE" fontWeight={'bold'}>
                      ₦ 0.00
                    </Text>
                    <HStack spacing={4}>
                      <Text fontSize="xs">Balance</Text>

                      <HStack>
                        <Iconify
                          color="#12D8A0"
                          icon="emojione-monotone:up-arrow"
                        />
                        <Text color="#12D8A0">0%</Text>
                      </HStack>
                    </HStack>
                  </CardBody>
                </Card>
                <Card
                  style={{
                    border: '1px solid #E4E4E4',
                    borderRadius: '12px',
                    width: '100%',
                  }}
                >
                  <CardBody>
                    <Text color="#12D8A0" fontWeight={'bold'}>
                      ₦ 0.00
                    </Text>
                    <HStack spacing={4}>
                      <Text fontSize="xs">Deposit</Text>

                      <HStack>
                        <Iconify
                          color="#12D8A0"
                          icon="emojione-monotone:up-arrow"
                        />
                        <Text color="#12D8A0">0%</Text>
                      </HStack>
                    </HStack>
                  </CardBody>
                </Card>
              </HStack>
              <HStack spacing={3} mt={3}>
                <Card
                  style={{
                    border: '1px solid #E4E4E4',
                    borderRadius: '12px',
                    width: '100%',
                  }}
                >
                  <CardBody>
                    <Text color="#000" fontWeight={'bold'}>
                      ₦ 0.00
                    </Text>
                    <HStack spacing={4}>
                      <Text fontSize="xs">Purchases</Text>

                      <HStack>
                        <Iconify
                          color="#12D8A0"
                          icon="emojione-monotone:up-arrow"
                        />
                        <Text color="#12D8A0">0%</Text>
                      </HStack>
                    </HStack>
                  </CardBody>
                </Card>
                <Card
                  style={{
                    border: '1px solid #E4E4E4',
                    borderRadius: '12px',
                    width: '100%',
                  }}
                >
                  <CardBody>
                    <Text color="#FF6A6A" fontWeight={'bold'}>
                      ₦ 0.00
                    </Text>
                    <HStack spacing={4}>
                      <Text fontSize="xs">Withdrawal</Text>

                      <HStack>
                        <Iconify
                          color="#FF6A6A"
                          icon="emojione-monotone:up-arrow"
                        />
                        <Text color="#FF6A6A">0%</Text>
                      </HStack>
                    </HStack>
                  </CardBody>
                </Card>
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

// Property Overview
function PropertyOverview() {
  return (
    <>
      <Box bg="#fff" rounded={20} p={6}>
        <HStack>
          <HStack>
            <Iconify fontSize={'24px'} icon="eva:home-fill" color="#4545FE" />
            <Text fontSize="lg" fontWeight={'bold'} color={'#3D3D3D'}>
              Property Overview
            </Text>
          </HStack>
          <Text fontSize="xs" color="#F5F5F5">
            View all
          </Text>
        </HStack>

        <Box mt={5}>
          <HStack justifyContent={'space-between'}>
            <Box
              style={{
                border: '1px solid #F5F5F5',
                height: '79px',
                width: '117px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'lg'} fontWeight={'bold'}>
                0
              </Text>
              <Text fontSize="sm" color={'#606060'}>
                Total
              </Text>
            </Box>
            <Box
              style={{
                border: '1px solid #F5F5F5',
                height: '79px',
                width: '117px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'lg'} fontWeight={'bold'}>
                0
              </Text>
              <Text fontSize="sm" color={'#606060'}>
                Available
              </Text>
            </Box>
            <Box
              style={{
                border: '1px solid #F5F5F5',
                height: '79px',
                width: '117px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'lg'} fontWeight={'bold'}>
                0
              </Text>
              <Text fontSize="sm" color={'#606060'}>
                Sold Out
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
}

// Customer Overview

function CustomerOverview() {
  return (
    <>
      <Box bg="#fff" rounded={20} p={6}>
        <HStack>
          <HStack>
            <Iconify
              fontSize={'24px'}
              icon="typcn:user-outline"
              color="#4545FE"
            />
            <Text fontSize="lg" fontWeight={'bold'} color={'#3D3D3D'}>
              Customers Overview
            </Text>
          </HStack>
          <Text fontSize="xs" color="#F5F5F5">
            View all
          </Text>
        </HStack>

        <Box mt={5}>
          <HStack justifyContent={'space-between'}>
            <Box
              style={{
                border: '1px solid #F5F5F5',
                height: '79px',
                width: '88px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'lg'} fontWeight={'bold'}>
                0
              </Text>
              <Text fontSize="sm" color={'#606060'}>
                Total
              </Text>
            </Box>
            <Box
              style={{
                border: '1px solid #F5F5F5',
                height: '79px',
                width: '88px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'lg'} fontWeight={'bold'}>
                0
              </Text>
              <Text fontSize="sm" color={'#606060'}>
                New
              </Text>
            </Box>
            <Box
              style={{
                border: '1px solid #F5F5F5',
                height: '79px',
                width: '88px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'lg'} fontWeight={'bold'}>
                0
              </Text>
              <Text fontSize="sm" color={'#606060'}>
                Active
              </Text>
            </Box>
            <Box
              style={{
                border: '1px solid #F5F5F5',
                height: '79px',
                width: '88px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'lg'} fontWeight={'bold'}>
                0
              </Text>
              <Text fontSize="sm" color={'#606060'}>
                Inctive
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
}

// Listing Overview
function ListingOverview() {
  return (
    <>
      <Box bg="#fff" rounded={20} p={4}>
        <Text fontSize="lg" fontWeight={'bold'} color={'#3D3D3D'}>
          Listing Overview
        </Text>

        <Box mt={5}>
          <SimpleGrid columns={2} spacing={10}>
            <Box
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'xs'}>Most viewed</Text>
              <Divider my={2} />
              <HStack spacing={2}>
                <Box
                  style={{
                    border: '1px solid #12D8A0',
                    padding: '10px',

                    borderRadius: '12px',
                  }}
                >
                  <Image src="/icon/placeholder.svg" alt="" />
                </Box>
                <Text fontSize="sm" fontWeight={'bold'} color={'#000'}>
                  None
                </Text>
              </HStack>
            </Box>
            <Box
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRadius: '12px',
              }}
            >
              <Text fontSize={'xs'}>Most shared</Text>
              <Divider my={2} />
              <HStack spacing={2}>
                <Box
                  style={{
                    border: '1px solid #4545FE',
                    padding: '10px',

                    borderRadius: '12px',
                  }}
                >
                  <Image src="/icon/placeholder.svg" alt="" />
                </Box>
                <Text fontSize="sm" fontWeight={'bold'} color={'#000'}>
                  None
                </Text>
              </HStack>
            </Box>
          </SimpleGrid>
          <Box bg="#F5F5F5" p={3} borderRadius={'12px'} mt={5}>
            <Text fontSize={'xs'} mb={3}>
              Most watchlisted
            </Text>
            <SimpleGrid columns={2} spacing={10}>
              <HStack spacing={2}>
                <Box
                  style={{
                    border: '1px solid #FF9103',
                    padding: '10px',

                    borderRadius: '12px',
                  }}
                >
                  <Image src="/icon/placeholder.svg" alt="" />
                </Box>
                <Text fontSize="sm" fontWeight={'bold'} color={'#000'}>
                  None
                </Text>
              </HStack>
              <Box
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  padding: '10px',

                  borderRadius: '12px',
                }}
              >
                <HStack justifyContent={'space-between'}>
                  <Text fontSize={'sm'}>0</Text>
                  <Box>
                    <Image src="/icon/bookmark.svg" alt="" />
                  </Box>
                </HStack>
                <Text as="sub" color="#3D3D3D">
                  Number of watchlists
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function OutstandingBalance() {
  return (
    <>
      <Stack
        bg="#fff"
        rounded={20}
        p={4}
        direction="column"
        justifyContent={'space-between'}
        spacing={20}
      >
        <HStack justifyContent={'space-between'}>
          <Box>
            <Text fontSize="4xl" fontWeight={'bold'} color={'#000'}>
              ₦ 0.00
            </Text>
            <Text fontSize="xs" color={'#606060'}>
              Total Outstanding Balance
            </Text>
          </Box>
          <Box>
            <Text fontSize="xs" color={'#CBCBCB'}>
              View all
            </Text>
          </Box>
        </HStack>

        <SimpleGrid columns={2} spacing={5}>
          <Box
            bg="#F5F5F5"
            style={{
              padding: '10px',
              borderRadius: '12px',
              display: 'flex',
            }}
          >
            <Image src="/icon/placeholder100.svg" alt="" mx="auto" />
          </Box>
          <Stack justifyContent="space-between" direction={'column'}>
            <Text fontSize="lg" fontWeight={'bold'} color={'#000'}>
              None
            </Text>
            <Box>
              <Text fontSize="xs" fontWeight={'bold'} color={'#FF6A6A'}>
                ₦ 0.00
              </Text>
              <Text fontSize="xs" fontWeight={'bold'} color={'#606060'}>
                Outstanding Balance
              </Text>
            </Box>
            <Box ml="auto">
              <HStack spacing={2}>
                <Text fontSize="xs" color={'#606060'}>
                  1/5
                </Text>
                <Box bg="#E4E4E4" borderRadius={'100%'}>
                  <Iconify icon="fluent:caret-left-12-filled" color="#919191" />
                </Box>
                <Box bg="#E4E4E4" borderRadius={'100%'}>
                  <Iconify
                    icon="fluent:caret-right-12-filled"
                    color="##191919"
                  />
                </Box>
              </HStack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
    </>
  );
}
function TopSelling() {
  return (
    <>
      <Stack
        bg="#fff"
        rounded={20}
        p={4}
        direction="column"
        justifyContent={'space-between'}
        spacing={10}
      >
        <HStack justifyContent={'space-between'}>
          <Box>
            <Text fontSize="xs" color={'#12D8A0'}>
              Top Selling
            </Text>
            <Text fontSize="4xl" fontWeight={'bold'} color={'#000'}>
              ₦ 0.00
            </Text>
            <Text fontSize="xs" color={'#606060'}>
              Total Sold
            </Text>
          </Box>
          <Box>
            <Text fontSize="xs" color={'#CBCBCB'}>
              View all
            </Text>
          </Box>
        </HStack>

        <SimpleGrid columns={2} spacing={5} mt={5}>
          <Box
            bg="#F5F5F5"
            style={{
              padding: '10px',
              borderRadius: '12px',
              display: 'flex',
            }}
          >
            <Image src="/icon/placeholder100.svg" alt="" mx="auto" />
          </Box>
          <Stack justifyContent="space-between" direction={'column'}>
            <Text fontSize="lg" fontWeight={'bold'} color={'#000'}>
              None
            </Text>
            <Box>
              <Text fontSize="xs" fontWeight={'bold'} color={'#CBCBCB'}>
                0
              </Text>
              <Text fontSize="xs" fontWeight={'bold'} color={'#606060'}>
                Whole units sold
              </Text>
            </Box>
            <Box ml="auto">
              <HStack spacing={2}>
                <Text fontSize="xs" color={'#606060'}>
                  1/5
                </Text>
                <Box bg="#E4E4E4" borderRadius={'100%'}>
                  <Iconify icon="fluent:caret-left-12-filled" color="#919191" />
                </Box>
                <Box bg="#E4E4E4" borderRadius={'100%'}>
                  <Iconify
                    icon="fluent:caret-right-12-filled"
                    color="##191919"
                  />
                </Box>
              </HStack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
    </>
  );
}
